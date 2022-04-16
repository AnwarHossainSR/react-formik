import { useFormik } from "formik";
import React from "react";
const onSubmit = (values) => {
  console.log("Form data", values);
};
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "Anwar",
      email: "",
      channel: "",
    },
    onSubmit,
  });


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
