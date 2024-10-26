import { useColorScheme } from '~/lib/useColorScheme';

const useThemedStyles = () => {
    const { isDarkColorScheme } = useColorScheme();
    
    return {
        // Text styles
        text: isDarkColorScheme ? 'text-white' : 'text-black',
        textMuted: isDarkColorScheme ? 'text-gray-400' : 'text-gray-500',
        textPrimary: isDarkColorScheme ? 'text-blue-400' : 'text-blue-600',

        // Background styles
        background: isDarkColorScheme ? 'bg-gray-900' : 'bg-white',
        backgroundSecondary: isDarkColorScheme ? 'bg-gray-800' : 'bg-gray-50',

        // Border styles
        border: isDarkColorScheme ? 'border-gray-700' : 'border-gray-200',

        // Interactive elements
        button: isDarkColorScheme
            ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800',

        // Card styles
        card: `${isDarkColorScheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg`,
        link: isDarkColorScheme ? 'border-blue-700' : 'border-blue-500'
    };
};

export default useThemedStyles;