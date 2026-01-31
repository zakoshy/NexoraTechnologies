'use server';

export async function sendReview(formData: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  try {
    // In a real application, you would integrate an email service like Resend, SendGrid, or Nodemailer.
    // For this example, we'll just log the data to the console.
    console.log('New review received:');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Message:', formData.message);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // You can return a success or error message to the client.
    return { success: true, message: 'Thank you for your review!' };
  } catch (error) {
    console.error('Error sending review:', error);
    return { success: false, message: 'Failed to send review.' };
  }
}
