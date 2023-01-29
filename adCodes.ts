// onCountryChange(value) {
//     this.selectedCountry = this.editForm.get(['country']).value;
//     const dictiNA = this.dictionaries.filter(x => x.label === 'N/A');

//     // dictiNA
//     if (this.selectedCountry.label !== 'Nigeria') {
//       this.civilStates = dictiNA;
//       this.lgas = dictiNA;
//     } else {
//       this.civilStates = this.dictionaries.filter(x => x.category === 'state').filter(x => x.label !== 'N/A');

//       this.editForm.patchValue({
//         civilState: null
//       });
//     }
//   }

//   //
//   onStateChange(value) {
//     this.selectedState = this.editForm.get(['civilState']).value;
//     this.selectedCountry = this.editForm.get(['country']).value;

//     if (this.selectedCountry !== undefined && this.selectedCountry.label === 'Nigeria') {
//       this.lgas = this.dictionaries
//         .filter(x => x.category === 'local_government_area')
//         .filter(x => x.code.includes(this.selectedState.code));
//     }
//   }

//   onNationalityChange(value) {
//     this.nationality = this.editForm.get(['nationality']).value;
//     if (this.nationality !== undefined) {
//       const dictiNA = this.dictionaries.filter(x => x.label === 'N/A');
//       if (this.nationality.label !== 'Nigerian') {
//         this.statesOfOrigin = dictiNA;
//       } else {
//         this.statesOfOrigin = this.dictionaries.filter(x => x.category === 'state');
//       }
//     }
//   }
