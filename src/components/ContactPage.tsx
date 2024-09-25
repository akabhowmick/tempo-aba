import { TextField, Button } from "@mui/material";

export const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-blue-900 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">Contact us.</h1>
            <p>Email: info@strive-aba.com</p>
            <p>Phone: (516) 860-2159 / (516) 342-1386</p>
            <p>Address: 756 B S Broadway, Hicksville, NY 11801</p>
            <p className="mt-4">We are available at any time, hope to speak to you soon!</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <form className="space-y-4">
              <div className="flex space-x-4">
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                  className="bg-white"
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                  className="bg-white"
                />
              </div>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                required
                className="bg-white"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                className="bg-white"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="bg-green-500 hover:bg-green-600"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
