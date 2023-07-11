import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/send_email", {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      console.log(data);
      if(response.status === 200) {
        toast.success("Data sent successfully!");
      } else {
        toast.error("Error sending data. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error sending data. Please try again later.");
    };
    reset();
  };


  return (
    <section className="form" id="cooperate">
      <ToastContainer
        theme="colored"
      />
      <div className="container">
        <div className="form__background">
          <h3 className="heading heading--white">Let's cooperate!</h3>
          <form
            name="form"
            id="form"
            className="form__body"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="input__wrapper">
              <input
                type="text"
                className="form__item"
                placeholder="Company Name*"
                style={{
                  border: errors?.fullName
                    ? "1px solid #ea1a40"
                    : "1px solid #dfe0eb",
                }}
                {...register("fullName", {
                  required: "Please enter your name",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9s]+$/,
                  },
                })}
              />
              <div className="form__error">
                {errors?.fullName && (
                  <p className="form__error-text">
                    {errors?.fullName?.message || "Error"}
                  </p>
                )}
              </div>
            </div>
            <div className="input__wrapper">
              <input
                type="email"
                className="form__item"
                placeholder="E-mail*"
                style={{
                  border: errors?.email
                    ? "1px solid #ea1a40"
                    : "1px solid #dfe0eb",
                }}
                {...register("email", {
                  required: "Please enter your e-mail",
                  minLength: {
                    value: 5,
                    message: "Minimum 5 characters",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  },
                })}
              />
              <div className="form__error">
                {errors?.email && (
                  <p className="form__error-text">
                    {errors?.email?.message || "Error"}
                  </p>
                )}
              </div>
            </div>
            <div className="input__wrapper">
              <input
                type="text"
                className="form__item"
                placeholder="Phone*"
                style={{
                  border: errors?.phone
                    ? "1px solid #ea1a40"
                    : "1px solid #dfe0eb",
                }}
                {...register("phone", {
                  required: "Please enter your phone",
                  minLength: {
                    value: 7,
                    message: "Minimum 7 characters",
                  },
                  pattern: {
                    value: /^(?:\+\d{1,3})?\d{10,12}$/,
                  },
                })}
              />
              <div className="form__error">
                {errors?.phone && (
                  <p className="form__error-text">
                    {errors?.phone?.message || "Error"}
                  </p>
                )}
              </div>
            </div>
            <div className="input__wrapper">
              <input
                type="text"
                name="message"
                className="form__item"
                placeholder="Comments"
                style={{
                  border: errors?.message
                    ? "1px solid #ea1a40"
                    : "1px solid #dfe0eb",
                }}
                {...register("message", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
              />
            </div>
            <input
              type="submit"
              value="Contact Us"
              className="hvr-push button--submit"
              id="button"
              name="button"
              disabled={!isValid}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
