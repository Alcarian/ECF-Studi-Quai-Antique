<Wrapper>
  {error && (
    <ErrorModal
      title={error.title}
      message={error.message}
      onConfirm={errorHandler}
    />
  )}
</Wrapper>;
