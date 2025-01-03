function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (!day || !month || !year) {
      document.getElementById("result").textContent = "Please fill in all fields.";
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript Date

    if (birthDate > today) {
      document.getElementById("result").textContent = "Birth date cannot be in the future.";
      return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    document.getElementById("result").textContent = `You are ${age} years old.`;
  }