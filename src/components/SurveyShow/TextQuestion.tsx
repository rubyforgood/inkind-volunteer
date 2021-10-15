interface TextQuestionProps {
  onAnswer: (value: string) => void,
}

export const TextQuestion = ({ onAnswer }: TextQuestionProps): JSX.Element => {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onAnswer(event.target.value)
  }

  return (
    <section>
      <textarea
          rows={5}
          cols={33}
          placeholder="Enter your comments here."
          onChange={onChange}
      />
    </section>
  )
}
