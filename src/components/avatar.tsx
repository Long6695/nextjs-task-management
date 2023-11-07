import { AvatarName } from '@/model/avatar'
import BoringAvatar, { AvatarProps } from 'boring-avatars'

const Avatar = ({
  size = 40,
  name = AvatarName.BiddyMason,
  variant = 'beam',
  colors = ['#3B234A', '#523961', '#BAAFC4', '#C3BBC9', '#D4C7BF']
}: AvatarProps) => {
  return <BoringAvatar size={size} name={name} variant={variant} colors={colors} />
}

export default Avatar
