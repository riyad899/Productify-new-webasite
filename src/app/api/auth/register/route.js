import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '../../../../../lib/mongodb';

export async function POST(request) {
  try {
    const { name, email, password, avatar } = await request.json();

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('product_store');

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: 'user',
      productsAdded: 0,
      favorites: [],
      orders: [],
      profile: {
        bio: '',
        avatar: avatar || '',
        phone: '',
        address: {
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        }
      },
      settings: {
        emailNotifications: true,
        pushNotifications: false,
        theme: 'light'
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLogin: null,
      isEmailVerified: false,
      isActive: true
    };

    const result = await db.collection('users').insertOne(newUser);

    if (result.insertedId) {
      // Return user data without password
      const { password: _, ...userWithoutPassword } = newUser;
      userWithoutPassword._id = result.insertedId;

      return NextResponse.json({
        success: true,
        message: 'User registered successfully',
        user: userWithoutPassword
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to create user' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
