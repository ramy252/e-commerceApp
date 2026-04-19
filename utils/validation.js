export function checkPasswordStrength(password) {
  let strength = 0;
  let feedback = { text: "", color: "", width: "" };
  if (password.length > 8) strength += 1;

  if (password.length > 12) strength += 1;
  if (password.match(/[a-z]/)) strength += 1;

  if (password.match(/[A-Z]/)) strength += 1;

  if (password.match(/[0-9]/)) strength += 1;

  if (password.match(/[!@#$%^&*]/)) strength += 1;
  switch (strength) {
    case 1:
      feedback.text = "very Weak";
      feedback.color = "bg-red-500";
      feedback.width = "w-1/6";
      break;
    case 2:
      feedback.text = "Weak";
      feedback.color = "bg-orange-500";
      feedback.width = "w-2/6";

      break;
    case 3:
      feedback.text = "Fair";
      feedback.color = "bg-yellow-500";
      feedback.width = "w-3/6";

      break;
    case 4:
      feedback.text = "Good";
      feedback.color = "bg-lime-500";
      feedback.width = "w-4/6";

      break;
    case 5:
      feedback.text = "Strong";
      feedback.color = "bg-primary-500";
      feedback.width = "w-5/6";

      break;
    case 6:
      feedback.text = "Very Strong";
      feedback.color = "bg-primary-700";
      feedback.width = "w-6/6";

      break;
  }

  return feedback;
}
