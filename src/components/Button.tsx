import React from 'react';
import {
  View,
  styled,
  Text,
  withStaticProperties,
  createStyledContext,
  SizeTokens,
  getTokens,
  useTheme,
} from 'tamagui';

// Not using this component yet but followed the guide to help me learn a bit about tamagui

export const ButtonContext = createStyledContext({
  size: '$3' as SizeTokens,
});

// size tokens are used for width, height, minWidth, minHeight, maxWidth, maxHeight
// radius tokens are used here
// space tokens are used for all others
const ButtonFrame = styled(View, {
  // the name indicates to use the sub-theme `Button`
  // since we defined light_Button, if our theme is light, this component
  // will always use the values from our `light_Button` theme
  name: 'Button',
  context: ButtonContext,
  alignItems: 'center',
  flexDirection: 'row',
  // our $prefixed values look to the theme first, then fallback to tokens
  backgroundColor: '$background',
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
  pressStyle: {
    backgroundColor: '$backgroundPress',
  },
  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          height: tokens.size[name as keyof typeof tokens.size],
          borderRadius: tokens.radius[name as keyof typeof tokens.radius],
          gap: tokens.space[name as keyof typeof tokens.space].val * 0.2,
        };
      },
    },
  } as const,
});

const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  color: '$color',
  fontFamily: '$body',
  userSelect: 'none',

  variants: {
    size: {
      '...fontSize': (name, { font }) => {
        return {
          fontSize: font?.size[name as keyof typeof font.size],
        };
      },
    },
  } as const,
});

const ButtonIcon = (props: { children: React.ReactNode }) => {
  const { size } = React.useContext(ButtonContext);
  const tokens = getTokens();
  const smallerSize = tokens.size[size as keyof typeof tokens.size].val * 0.5;
  const theme = useTheme();

  // assuming our icon accepts width, height, and color
  if (React.isValidElement(props.children)) {
    return React.cloneElement(props.children, {
      width: smallerSize,
      height: smallerSize,
      color: theme.color.get(),
    } as any);
  }

  return null; // or handle the case where children is not a valid ReactElement
};

// export const Button = ButtonFrame as typeof ButtonFrame & {
//   Text: typeof ButtonText;
// };
export const Button = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Props: ButtonContext.Provider,
});
