import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class NewRegistrationMail {
  get key() {
    return 'NewRegistrationMail';
  }

  async handle({ data }) {
    const { student, end_date, total_price, start_date } = data;

    // console.log('A fila executou!');

    /**
     * Plano, data Inicio, termino, valor e boas vindas
     * templante chama o arquivos html da view.
     * Obs.: não aplicar _ e nem letras uppercase no name
     */

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Matrícula realizada com sucesso!',
      template: 'new-registration-mail',
      context: {
        userName: student.name,
        startDate: format(
          parseISO(start_date),
          "'dia' dd 'de' MMMM', às' H:mm'h' 'de' yyyy'.'",
          {
            locale: pt,
          }
        ),
        endDate: format(
          parseISO(end_date),
          "'dia' dd 'de' MMMM', às' H:mm'h' 'de' yyyy'.'",
          {
            locale: pt,
          }
        ),
        totalPrice: total_price,
      },
    });
  }
}

export default new NewRegistrationMail();
