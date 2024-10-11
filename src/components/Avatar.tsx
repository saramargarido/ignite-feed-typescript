import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  alt?: string;
  src: string;
}

export function Avatar({ hasBorder = true, src, alt = "Avatar do usuário" }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}