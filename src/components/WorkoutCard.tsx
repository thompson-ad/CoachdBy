import type { CardProps } from 'tamagui';
import { Button, Card, H2, Paragraph, XStack, YStack } from 'tamagui';

interface WorkoutCardProps extends CardProps {
  header?: string;
  subheading: string | null;
  movements: {
    name: string;
  }[];
  footerButton?: string;
  onStartPress?: () => void;
}

export function WorkoutCard({
  header,
  subheading,
  movements,
  footerButton,
  onStartPress,
  ...props
}: WorkoutCardProps) {
  // If I'm going to show movements in order I need to make sure I can set, and fetch them in the order that the coach presecribes

  // Get the hierarchy right - most important thing is the movement list
  // muscle group tags (need in DB)
  return (
    <Card elevate bordered {...props}>
      {(header || subheading) && (
        <Card.Header>
          {header && <H2>{header}</H2>}
          {subheading && <Paragraph theme="alt2">{subheading}</Paragraph>}
        </Card.Header>
      )}

      {movements && (
        <YStack padding="$4">
          {movements.map((movement) => (
            <YStack key={movement.name}>
              <Paragraph fontWeight="bold" color="$color11">
                {movement.name}
              </Paragraph>
            </YStack>
          ))}
        </YStack>
      )}
      {footerButton && (
        <Card.Footer padded>
          <XStack flex={1} />
          <Button onPress={onStartPress} borderRadius="$10">
            {footerButton}
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
}
