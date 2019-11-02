import Mail from '../../lib/Mail';

class HelpOrderAnswerMail {
  get key() {
    return 'HelpOrderAnswerMail';
  }

  async handle({ data }) {
    const { student, question, answer } = data;

    /**
     * Plano, data de término, valor e boas vindas
     * templante chama o arquivos html da view.
     * Obs.: não aplicar _ e nem letras uppercase no name
     */

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Pergunta respondida!',
      template: 'help-order-answer-mail',
      context: {
        user: student.name,
        question,
        answer,
      },
    });
  }
}

export default new HelpOrderAnswerMail();
