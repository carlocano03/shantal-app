import { View } from 'react-native';
import { Href, Link } from 'expo-router';
import { Text } from 'react-native';
import useThemedStyles from '~/src/hooks/useThemedStyles';

export default function Page() {
    const styles = useThemedStyles();

    return (
        <View className={`flex-1 p-4 ${styles.background}`}>
            <Text className={`dark:text-white`}>
                Hello World
            </Text>

            <View className="space-y-4 mt-4">
                <Link
                    href={"/home" as Href<string>}
                    className={`block py-2 ${styles.link}`}
                >
                    <Text className={styles.link}>Go to Home</Text>
                </Link>

                <Link
                    href={"/login" as Href<string>}
                    className={`block py-2 ${styles.link}`}
                >
                    <Text className={styles.link}>Go to Login</Text>
                </Link>

                <Link
                    href={"/register" as Href<string>}
                    className={`block py-2 ${styles.link}`}
                >
                    <Text className={styles.link}>Go to Register</Text>
                </Link>
            </View>
        </View>
    );
}