/**
 * Helper methods for common form data tasks.
 */
export class FormHelper {
  /**
   * Creates a new instance of the form helper for the element with the given id.
   * @param id The id of the form element.
   */
  constructor(public id: string) {}

  private log(msg: string) {
    console.log(`[FormHelper] ${msg}`);
  }

  get(): string {
    let value =
      document.querySelector<HTMLFormElement>(`#${this.id}`)?.value ?? "";
    this.log(`Value of ${this.id}: '${value}'`);
    return value;
  }

  set(newValue: string) {
    let el = document.querySelector<HTMLFormElement>(`#${this.id}`);
    if (el !== null) {
      this.log(`Set ${this.id} to: '${newValue}'`);
      el.value = newValue;
    }
  }

  click(listener: EventListenerOrEventListenerObject) {
    let el = document.querySelector<HTMLFormElement>(`#${this.id}`);
    if (el !== null) {
      el.addEventListener("click", listener);
    }
  }
}
