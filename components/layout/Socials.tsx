import DiscordIcon from "../../assets/svg/logo/fa-discord.svg";
import GitHubIcon from "../../assets/svg/logo/fa-github.svg";
import TwitterIcon from "../../assets/svg/logo/fa-twitter.svg";
import IconButton from "../input/IconButton";

export default function Socials() {
  return (
    <div className="space-x-4 pt-4">
      <IconButton
        icon={GitHubIcon}
        label="github"
        href="https://github.com/AltiVR"
        external
      />
      <IconButton
        icon={DiscordIcon}
        label="discord"
        href="https://discord.com/users/836317702658326528"
        external
      />
      <IconButton
        icon={TwitterIcon}
        label="twitter"
        href="https://twitter.com/Altific"
        external
      />
    </div>
  );
}
