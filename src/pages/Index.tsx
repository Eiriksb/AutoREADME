import React from 'react';
import { createClient } from '@supabase/supabase-js'
import Navbar from '../components/NavBar';
import '../App.css';

const supabase = createClient('https://hzxeggdmdczfibbozkym.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6eGVnZ2RtZGN6ZmliYm96a3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNjEwMTQsImV4cCI6MjAxNTczNzAxNH0.V4iB84GK0O1z0X_urHNWV2bCrXD76QkwtgtqKH7xki8')


const Index: React.FC = () => {
  return (
    <div>
    <Navbar supabaseClient={supabase} />
      <h1>Welcome to the Index Page!</h1>
      {/* Add content for the logged-in user */}
      {/* You can display user-specific information, actions, etc. */}
    </div>
  );
};

export default Index;