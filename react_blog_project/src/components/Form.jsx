import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Define a validation schema with Yup
const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
});

const Form = () => {
    // Pass the validation schema to useForm
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Name: </label>
            <input name="name" {...register('name')} placeholder='Enter Name' />
            {errors.name && <p>Name is required</p>}

            <label>Email: </label>
            <input name="email" {...register('email')} placeholder='Enter Email' />
            {errors.email && <p>Email is required and should be valid</p>}

            <input type="submit" />
        </form>
    );
};

export default Form;