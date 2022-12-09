import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NetlifyFormsService } from '../netlify-forms.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: UntypedFormGroup
  errorMessage: String = ''

  constructor(private netlifyForms: NetlifyFormsService,
              private fb: UntypedFormBuilder)
  {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.formInit()
  }

  sendContact() {
    this.netlifyForms.submitContactForm(this.contactForm.value).subscribe(
      () => {
        this.contactForm.reset()
        // Maybe add success notification
      },
      (err) => {
        this.errorMessage = err
      }
    )
  }

 ngOnDestroy() {

 }

 private formInit() {
  this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  })
}

}
