// import Button from './Button';

// /**
//  * Button Component Examples
//  *
//  * This file demonstrates all the different variants and sizes of the Button component.
//  * Import and use this in your App.tsx to see the buttons in action.
//  */

// export function ButtonExamples() {
//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Button Component</h1>

//       {/* Primary Variant - All Sizes */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Primary Variant</h2>
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm text-gray-600 mb-2 font-medium">Small</p>
//               <Button variant="primary" size="small">
//                 Small Primary
//               </Button>
//             </div>

//             <div>
//               <p className="text-sm text-gray-600 mb-2 font-medium">Medium (Default)</p>
//               <Button variant="primary" size="medium">
//                 Medium Primary
//               </Button>
//             </div>

//             <div>
//               <p className="text-sm text-gray-600 mb-2 font-medium">Large</p>
//               <Button variant="primary" size="large">
//                 Large Primary
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Outline Variant - All Sizes */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outline Variant</h2>
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm text-gray-600 mb-2 font-medium">Small</p>
//               <Button variant="outline" size="small">
//                 Small Outline
//               </Button>
//             </div>

//             <div>
//               <p className="text-sm text-gray-600 mb-2 font-medium">Medium (Default)</p>
//               <Button variant="outline" size="medium">
//                 Medium Outline
//               </Button>
//             </div>

//             <div>
//               <p className="text-sm text-gray-600 mb-2 font-medium">Large</p>
//               <Button variant="outline" size="large">
//                 Large Outline
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Side by Side Comparison */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Variants & Sizes</h2>
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="space-y-6">
//             <div>
//               <p className="text-sm text-gray-600 mb-3 font-medium">Small</p>
//               <div className="flex flex-wrap gap-3">
//                 <Button variant="primary" size="small">
//                   Primary Small
//                 </Button>
//                 <Button variant="outline" size="small">
//                   Outline Small
//                 </Button>
//               </div>
//             </div>

//             <div>
//               <p className="text-sm text-gray-600 mb-3 font-medium">Medium</p>
//               <div className="flex flex-wrap gap-3">
//                 <Button variant="primary" size="medium">
//                   Primary Medium
//                 </Button>
//                 <Button variant="outline" size="medium">
//                   Outline Medium
//                 </Button>
//               </div>
//             </div>

//             <div>
//               <p className="text-sm text-gray-600 mb-3 font-medium">Large</p>
//               <div className="flex flex-wrap gap-3">
//                 <Button variant="primary" size="large">
//                   Primary Large
//                 </Button>
//                 <Button variant="outline" size="large">
//                   Outline Large
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Special States */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Special States</h2>
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="space-y-6">
//             <div>
//               <p className="text-sm text-gray-600 mb-3 font-medium">Loading State</p>
//               <div className="flex flex-wrap gap-3">
//                 <Button variant="primary" isLoading>
//                   Loading...
//                 </Button>
//                 <Button variant="outline" isLoading>
//                   Loading...
//                 </Button>
//               </div>
//             </div>

//             <div>
//               <p className="text-sm text-gray-600 mb-3 font-medium">Disabled State</p>
//               <div className="flex flex-wrap gap-3">
//                 <Button variant="primary" disabled>
//                   Disabled Primary
//                 </Button>
//                 <Button variant="outline" disabled>
//                   Disabled Outline
//                 </Button>
//               </div>
//             </div>

//             <div>
//               <p className="text-sm text-gray-600 mb-3 font-medium">Full Width</p>
//               <Button variant="primary" fullWidth>
//                 Full Width Button
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* With onClick Handler */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Example</h2>
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="flex flex-wrap gap-3">
//             <Button variant="primary" onClick={() => alert('Primary button clicked!')}>
//               Click Me (Primary)
//             </Button>
//             <Button variant="outline" onClick={() => alert('Outline button clicked!')}>
//               Click Me (Outline)
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Code Examples */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Usage Examples</h2>
//         <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
//           <pre className="text-sm">
//             <code>{`// Import the Button component
// import Button from './components/base/Button';

// // Primary variant
// <Button variant="primary" size="medium">
//   Click Me
// </Button>

// // Outline variant
// <Button variant="outline" size="small">
//   Small Outline
// </Button>

// // With onClick handler
// <Button
//   variant="primary"
//   onClick={() => console.log('Clicked!')}
// >
//   Interactive Button
// </Button>

// // Loading state
// <Button variant="primary" isLoading>
//   Loading...
// </Button>

// // Disabled
// <Button variant="outline" disabled>
//   Disabled
// </Button>

// // Full width
// <Button variant="primary" fullWidth>
//   Full Width
// </Button>`}</code>
//           </pre>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ButtonExamples;
