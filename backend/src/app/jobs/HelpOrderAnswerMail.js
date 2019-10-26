import Mail from '../../lib/Mail';

class HelpOrderAnswerMail {
  get key() {
    return 'HelpOrderAnswerMail';
  }

  async handle({ data }) {
    const { student, question, answer } = data;
    /**
     * Plano, data de término, valor e boas vindas
     */

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Pergunta respondida!',
      template: 'help-order-answer',
      context: {
        user: student.name,
        question,
        answer,
      },
    });
  }
}

export default new HelpOrderAnswerMail();
