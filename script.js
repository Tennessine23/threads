const supabaseUrl = "https://cpfmwkayyaduulukpjwf.supabase.co";
const supabaseKey = "sb_publishable_GPyGl4xPA3aMvxbxqY8Vtw_VU48bAgH";

const db = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

document.getElementById("signupForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await db
    .from("Users")
    .insert([
      {
        email: email,
        password: password
      }
    ]);

  if (error) {
    console.error(error);
    alert("Something went wrong.");
  } else {
    alert("Registration successful!");
  }
});
