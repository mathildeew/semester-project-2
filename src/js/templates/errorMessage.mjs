export function errorMessage() {
  const errorMessageTemplate = `
                                <section class="mt-5 d-flex flex-column align-items-center justify-content-center">
                                  <div class="mt-5 my-auto d-flex flex-column align-items-center justify-content-center">
                                      <h2>Sorry, we have some bugs in the machinery.</h2>
                                       <p>Please try again later</p>
                                  </div>
                                </section>
                              `;
  return errorMessageTemplate;
}
