// All the copy for the page lives here (copied from the design prototype).
// Edit text here, then rebuild. Keep the structure (brackets, quotes, commas) the same.

export const FACTS = [
  ['Since 2017', 'Installing on the islands'],
  ['Canadian-made', 'Gutter materials'],
  ['Continuous', 'Form-fitting gutters'],
  ['Free', 'Estimates'],
].map(([t, d]) => ({ t, d }));

// `style` controls the card colours: 'dark', 'white' or 'grey'.
export const SERVICES = [
  { k: 'Gutter installation', t: 'New installs and replacements.', d: 'Professional installation using only the best Canadian-made materials, for functional, form-fitting continuous gutters. Fair prices and prompt service, for homeowners and contractors.', tags: ['Continuous gutters', 'Replacements', 'New builds'], style: 'dark' },
  { k: 'Gutter protection', t: 'Keep the debris and snow out.', d: 'Keeping gutters clear is a challenge in our part of BC, with all the leaves, needles, rainfall and snow. We offer debris and snow stop solutions to protect your gutters.', tags: ['Gutter guards', 'Snow stops'], style: 'white' },
  { k: 'Repair and maintenance', t: 'Cleaning and repairs.', d: 'Keeping your gutters clear of debris will keep them in good condition for years to come. We’re available for gutter cleaning and repairs. Call us for an estimate.', tags: ['Gutter cleaning', 'Repairs'], style: 'grey' },
];

export const PROVIDE = ['Form-fitting continuous gutters', 'Gutter guards and snow stops', 'Soffit and eavestroughs', 'Installs for homeowners and contractors'];

export const AREAS = [
  ['Quadra Island', 'Quathiaski Cove, Heriot Bay'],
  ['Campbell River', 'and area'],
  ['Cortes Island', 'Mansons Landing, Whaletown'],
  ['Comox / Courtenay', 'Black Creek, Oyster River, Stories Beach'],
  ['Gold River', 'and area'],
  ['Central Vancouver Island', 'DIY kit delivery available'],
].map(([t, d]) => ({ t, d }));

// Options in the form's "Area" dropdown.
export const AREA_OPTIONS = ['Quadra Island', 'Campbell River', 'Cortes Island', 'Comox / Courtenay', 'Gold River', 'Central Vancouver Island'];

// The "I need" buttons in the form.
export const CHIPS = ['New gutters', 'Replacement', 'Gutter guards', 'Snow stops', 'Cleaning', 'Repair', 'DIY kit'];

export const HOURS = 'Monday to Friday, 9 to 5. Weekends by appointment.';
