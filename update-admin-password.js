import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';

dotenv.config();

async function updateAdminPassword(newPassword) {
  try {
    console.log('🔐 Admin Password Update Script');
    console.log('================================');
    
    // Check if database URL is available
    if (!process.env.ACM_IIT_POSTGRES_DATABASE_URL) {
      console.error('❌ Error: ACM_IIT_POSTGRES_DATABASE_URL environment variable not found');
      console.error('Make sure your .env file contains the database connection string');
      return;
    }
    
    const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL);
    
    // Configuration
    const saltRounds = 12;
    
    // Validate new password
    if (!newPassword || newPassword.length < 6) {
      console.error('❌ Error: New password must be at least 6 characters long');
      return;
    }
    
    console.log(`New password: ${newPassword}`);
    console.log('');
    
    // Check if admin user exists
    console.log('📋 Checking if admin user exists...');
    const users = await sql`SELECT * FROM admin_users WHERE username = 'admin'`;
    
    if (users.length === 0) {
      console.log('❌ Admin user not found!');
      return;
    }
    
    const user = users[0];
    unset(user);
    console.log('✅ Admin user found');
    
    // Generate new hash
    console.log('🔨 Generating new password hash...');
    const newHash = await bcrypt.hash(newPassword, saltRounds);
    console.log('✅ New hash generated');
    
    // Update password in database
    console.log('💾 Updating password in database...');
    const result = await sql`
      UPDATE admin_users 
      SET password_hash = ${newHash}, updated_at = CURRENT_TIMESTAMP
      WHERE username = 'admin'
    `;
    unset(result);
    
    console.log('✅ Password updated successfully');
    
    // Verify the update worked
    console.log('🔍 Verifying new password...');
    const updatedUsers = await sql`SELECT * FROM admin_users WHERE username = 'admin'`;
    const updatedUser = updatedUsers[0];
    
    const isNewPasswordValid = await bcrypt.compare(newPassword, updatedUser.password_hash);
    console.log(`New password verification: ${isNewPasswordValid ? '✅ PASSED' : '❌ FAILED'}`);
    
    if (isNewPasswordValid) {
      console.log('');
      console.log('🎉 Password update completed successfully!');
      console.log('================================');
      console.log('New login credentials:');
      console.log(`Username: admin`);
      console.log(`Password: ${newPassword}`);
      console.log('');
      console.log('⚠️  Remember to:');
      console.log('   - Keep this password secure');
      console.log('   - Update any documentation');
      console.log('   - Notify other admins if needed');
    } else {
      console.log('❌ Password update failed - verification failed');
    }
    
  } catch (error) {
    console.error('❌ Error updating password:', error.message);
    console.error('Full error:', error);
  }
}

// Get command line arguments
const args = process.argv.slice(2);

// Show usage if no password provided
if (args.length === 0) {
  console.log('🔐 Admin Password Update Script');
  console.log('================================');
  console.log('');
  console.log('Usage:');
  console.log('  node update-admin-password.js <new-password>');
  console.log('');
  console.log('Examples:');
  console.log('  node update-admin-password.js MyNewPassword123');
  console.log('  node update-admin-password.js "Secure Password 2025"');
  console.log('');
  console.log('Requirements:');
  console.log('  - Password must be at least 6 characters long');
  console.log('  - .env file must contain ACM_IIT_POSTGRES_DATABASE_URL');
  console.log('');
  process.exit(1);
}

// Get the new password from command line arguments
const newPassword = args[0];

// Run the script
updateAdminPassword(newPassword);
