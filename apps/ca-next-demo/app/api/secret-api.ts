import { getSession } from "next-auth/react";


export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.status.json({
      name: "John Doe",
      message: "Welcome authenticated user",
    });
  } else {
    res.status(403).json({
      error: "You must sign-in to view the content on this page.",
    });
  }
};
