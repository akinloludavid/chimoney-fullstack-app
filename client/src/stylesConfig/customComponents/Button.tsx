/* eslint-disable @typescript-eslint/no-explicit-any */

import { StyleFunctionProps } from '@chakra-ui/react'

export const ButtonStyles = {
    // style object for base or default style
    baseStyle: {
        outline: 'none',
        _focus: { boxShadow: 'none' },
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        primary: () => ({
            bg: 'pryColor',
            fontSize: '15px',
            fontWeight: '500',
            lineHeight: '19px',
            borderRadius: '20px',
            color: 'white',
            width: '255px',
            height: '40px',
            _hover: {
                backgroudColor: 'secColor',
            },
            _disabled: {
                bg: 'secColor',
            },
            _active: {
                bg: 'pryColor',
            },
            '@media (max-width:480px)': {
                width: 'full',
            },
        }),
        secondary: (props: StyleFunctionProps) => ({
            bg: props.colorMode === 'dark' ? '#EFEFF9' : 'secBtnColor',
            fontSize: '15px',
            fontWeight: '500',
            lineHeight: '19px',
            borderRadius: '20px',
            color: 'pryColor',
            width: '255px',
            height: '40px',
            _hover: {
                bg: props.colorMode === 'dark' ? 'white' : 'secBtnHoverColor',
            },
            '@media (max-width:480px)': {
                width: 'full',
            },
        }),
        danger: () => ({
            bg: 'danger',
            fontSize: '15px',
            fontWeight: '700',
            lineHeight: '19px',
            borderRadius: '20px',
            color: 'white',
            width: '255px',
            height: '40px',
            _hover: {
                bg: 'btnDangerHover',
            },
            '@media (max-width:480px)': {
                width: 'full',
            },
        }),
        navActive: (props: any) => ({
            bg: props.colorMode === 'dark' ? '#EFEFF9' : 'secBtnColor',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '19px',
            borderRadius: '8px',

            paddingY: '28px',
            color: 'pryColor',
            '@media (max-width:480px)': {
                width: 'full',
            },
        }),
        navInActive: (props: any) => ({
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '19px',
            borderRadius: '8px',
            paddingY: '28px',

            color: props.colorMode === 'dark' ? '#EFEFF9' : 'black',
            // height: '40px',

            '@media (max-width:480px)': {
                width: 'full',
            },
        }),
    },
    // default values for `size` and `variant`
    defaultProps: {
        variant: 'primary',
    },
}

/* eslint-disable @typescript-eslint/no-explicit-any */
