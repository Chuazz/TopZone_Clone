import { PropsWithChildren } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormMethod } from 'react-router-dom';

type Formprops = PropsWithChildren<{
	method?: FormMethod;
	onSubmit?: Function;
}>;

const Form = ({ method = 'post', onSubmit = () => {}, children }: Formprops) => {
	const methods = useForm();

	const onHanldeSubmit = (data: any, e: any) => {
		console.log(data, e);
		onSubmit(data, e);
	};

	return (
		<FormProvider {...methods}>
			<form action={method} onSubmit={methods.handleSubmit(onHanldeSubmit)}>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
