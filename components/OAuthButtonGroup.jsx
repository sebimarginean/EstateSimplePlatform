import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "./ProviderIcons";
import { useSession, signIn } from "next-auth/react";

const providers = [
  { name: "Google", icon: <GoogleIcon boxSize="5" /> },
  { name: "Twitter", icon: <TwitterIcon boxSize="5" /> },
  { name: "Facebook", icon: <FacebookIcon boxSize="5" /> },
];

export const OAuthButtonGroup = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <ButtonGroup variant="outline" spacing="4" width="full">
        {providers.map(({ name, icon }) => (
          <Button
            key={name}
            width="full"
            borderColor="#C5C5C5"
            onClick={() => signIn(name.toLowerCase())}
          >
            <VisuallyHidden>Sign in with {name}</VisuallyHidden>
            {icon}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};
