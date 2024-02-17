import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Field } from "formik";
import {
  Box,
  Heading,
  Center,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function App() {
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={72}>
        <Center>
          <Heading p={6}>{t("login")}</Heading>
        </Center>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            rememberMe: false,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = t("required");
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = t("invalid_email");
            }
            if (!values.password) {
              errors.password = t("required");
            } else if (values.password.length < 6) {
              errors.password = t("password_length");
            }
            if (isRegister && values.password !== values.confirmPassword) {
              errors.confirmPassword = t("passwords_do_not_match");
            }
            return errors;
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">{t("email_label")}</FormLabel>{" "}
                  {/*  */}
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">
                    {t("password_label")}
                  </FormLabel>{" "}
                  {/*  */}
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {isRegister && (
                  <FormControl
                    isInvalid={
                      !!errors.confirmPassword && touched.confirmPassword
                    }
                  >
                    <FormLabel htmlFor="confirmPassword">
                      {t("confirm_password_label")}
                    </FormLabel>{" "}
                    {/*  */}
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      variant="filled"
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
                <Field as={Checkbox} id="rememberMe" name="rememberMe">
                  {t("remember_me_label")} {/*  */}
                </Field>
                <Button type="submit" colorScheme="orange" width="full">
                  {isRegister ? t("register_button") : t("login_button")}{" "}
                  {/*  */}
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        <Button
          mt={6}
          variant="link"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? t("already_have_account") : t("create_an_account")}{" "}
          {/*  */}
        </Button>
      </Box>
    </Flex>
  );
}
