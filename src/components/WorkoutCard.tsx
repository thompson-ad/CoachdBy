import type { CardProps } from 'tamagui';
import { Button, Card, H2, Paragraph, View, XStack, YStack } from 'tamagui';

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
  // muscle group tags (need in DB)

  return (
    <Card {...props} backgroundColor="#EFEFEF">
      {(header || subheading) && (
        <Card.Header>
          {header && <H2>{header}</H2>}
          {subheading && <Paragraph theme="alt2">{subheading}</Paragraph>}
        </Card.Header>
      )}

      {movements && movements.length > 0 && (
        <YStack padding="$4">
          {movements.slice(0, 5).map((movement, index) => (
            <XStack key={movement.name} alignItems="center">
              <View flexDirection="row" width={14} marginRight="$1">
                <Paragraph color="#060025">{index + 1}.</Paragraph>
              </View>
              <Paragraph color="#060025">{movement.name}</Paragraph>
            </XStack>
          ))}
          {movements.length > 5 && (
            <XStack alignItems="center">
              <View flexDirection="row" width={14} marginRight="$1">
                <Paragraph color="#060025">...</Paragraph>
              </View>
            </XStack>
          )}
        </YStack>
      )}

      {footerButton && (
        <Card.Footer padded>
          <Button
            size="$3"
            variant="outlined"
            borderWidth={1}
            borderColor="#060025"
            borderRadius="$12"
            color="#060025"
          >
            {footerButton}
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
}
