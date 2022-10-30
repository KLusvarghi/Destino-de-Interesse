import React from 'react';
import styles from './DestinosInteresse.module.css';
import Input from '../Forms/Input';
import useForm from '../Hooks/useForm';
import { GET_CITY, GET_COUNTRY } from '../Api';
import AsyncSelect from 'react-select/async';

const DestinosInteresse = () => {
  const name = useForm();
  const email = useForm('email');
  const phone = useForm('phone');
  const cpf = useForm('cpf');
  const [cityValue, setCityValue] = React.useState([]);
  const [countryValue, setCountryValue] = React.useState([]);
  const { fetchCity } = GET_CITY();
  const { fetchCountry } = GET_COUNTRY();

  const formValue = {
    name: name.value,
    emai: email.value,
    telefone: phone.value,
    cpf: cpf.value,
    pais: countryValue,
    cidade: cityValue,
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      name.validate() &&
      email.validate() &&
      phone.validate() &&
      cpf.validate()
    ) {
      console.log(formValue);
      return true;
    }
  }

  return (
    <section className={styles.contentWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <div className={`${styles.area} ${styles.dados} `}>
            <h1 className={styles.title}>Dados Pessoais</h1>
            <Input label="Nome" type="text" placeholder="João" {...name} />
            <Input
              label="Email"
              type="email"
              {...email}
              placeholder="joao@exemplo.com"
            />
            {}
            <Input
              label="Telefone"
              type="number"
              {...phone}
              placeholder="(**) **** ****"
            />
            <Input
              label="CPF"
              type="text"
              {...cpf}
              placeholder="***.***.***-**"
            />
          </div>
          <div className={`${styles.area} ${styles.destino} `}>
            <h1 className={styles.title}>Destino de Interesses</h1>
            <div className={styles.container}>
              <div className={styles.containerSelect}>
                <AsyncSelect
                  cacheOptions
                  loadOptions={fetchCity}
                  placeholder={'Selecione cidade(s)'}
                  onChange={(value) => setCityValue(value)}
                  defaultOptions
                  isMulti
                  isClearable
                />
              </div>
              <div className={styles.containerSelect}>
                <AsyncSelect
                  cacheOptions
                  loadOptions={fetchCountry}
                  placeholder={'Selecione país(es)'}
                  onChange={(value) => setCountryValue(value)}
                  defaultOptions
                  isMulti
                  isClearable
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btn}>Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default DestinosInteresse;
