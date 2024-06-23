import { Button } from '@nextui-org/react';

interface ButtonProps {
	/**
	 * The type of the button. Can be 'button', 'submit', or 'reset'.
	 */
	action?: () => void ;
	/**
	 * The title of the button.
	 */
	title: string;
	/**
	 * The icon of the button.
	 */
	icon?: string;
	/**
	 * The variant of the button. Can be 'btn_dark_green', 'secondary', or 'tertiary'. This variants are customly predefined in globals.css or could just be left blank and use the normal className property on the button component*/
	variant: string;

	textVariant: string;
}

const ButtonNextUI = ({
	action,
	title,
	icon,
	variant,
	textVariant,
}: ButtonProps) => {
	return (
		<Button
			size='lg'
			className={`flex items-center justify-center rounded-full ${variant}`}
			onPress={action}
			startContent={
				icon && <img src={icon} alt='icon' width={24} height={24} />
			}
		>
			<label className={`${textVariant}`}>{title}</label>
		</Button>
	);
};

export default ButtonNextUI;
