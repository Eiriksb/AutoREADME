import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { createClient, Session  } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import '../App.css';
import IndexPage from './Index';

const supabase = createClient('https://hzxeggdmdczfibbozkym.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6eGVnZ2RtZGN6ZmliYm96a3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNjEwMTQsImV4cCI6MjAxNTczNzAxNH0.V4iB84GK0O1z0X_urHNWV2bCrXD76QkwtgtqKH7xki8')

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    // go to index page
    return (<IndexPage />)
  }
}