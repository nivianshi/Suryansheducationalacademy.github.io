document.addEventListener("DOMContentLoaded", function () {
    const qrCode = document.getElementById('https://lh3.googleusercontent.com/Jw7KUCfFTBikLZ6KIB2GKi2ABz04vTrzHzQhLx6yvkD-QFNCA3ewXbl07-uUPsZ0Wq3a1Bj4fov9IoQk2k_F253uzvDbaex0h_j2WrN1');
    const downloadLink = document.getElementById('https://drive.google.com/file/d/1RQ9xstN6UlhiYBsFP-ImXTfZ3WfhcGJA/view');
    const statusMessage = document.getElementById('status-message');

    // Simulate payment completion by clicking on QR code
    qrCode.addEventListener('https://lh3.googleusercontent.com/Jw7KUCfFTBikLZ6KIB2GKi2ABz04vTrzHzQhLx6yvkD-QFNCA3ewXbl07-uUPsZ0Wq3a1Bj4fov9IoQk2k_F253uzvDbaex0h_j2WrN1', function () {
        // Simulate payment success (replace with actual payment logic)
        const paymentSuccess = true;

        if (paymentSuccess) {
            downloadLink.href = 'https://drive.google.com/file/d/1RQ9xstN6UlhiYBsFP-ImXTfZ3WfhcGJA/view';
            statusMessage.textContent = 'Payment successful! Click the link below to download the PDF:';
            downloadLink.style.pointerEvents = 'auto'; // Enable the download link
        } else {
            statusMessage.textContent = 'Payment failed. Please try again.';
        }
    });
});
