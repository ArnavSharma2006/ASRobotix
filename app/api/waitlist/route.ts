import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Google Apps Script Web App URL (you'll get this after deploying the script)
    const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL

    if (!GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL environment variable is not set')
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone || '',
        company: body.company || '',
        role: body.role || '',
        interest: body.interest || '',
        message: body.message || ''
      })
    })

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Successfully added to waitlist' },
        { status: 200 }
      )
    } else {
      throw new Error(result.message || 'Unknown error from Google Apps Script')
    }

  } catch (error) {
    console.error('Error processing waitlist submission:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process submission. Please try again.' },
      { status: 500 }
    )
  }
} 