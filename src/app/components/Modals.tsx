// 'use client';

// import React, { useState } from 'react';
// import styles from './Modals.module.css';

// function Modals() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   function openModal() {
//     setIsModalOpen(true);
//   }

//   function closeModal() {
//     setIsModalOpen(false);
//   }

//   return (
//     <div className={styles.layout}>
//       <div>
//         <button className={styles.button} onClick={openModal}>
//           Open modal
//         </button>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modal}>
//           <div className={styles.modalContent}>
//             <div className={styles.modalHeader}>
//               <button className={styles.closeButton} onClick={closeModal}>
//                 &times;
//               </button>

//               <h2>Modal header</h2>
//             </div>
//             <div className={styles.modalBody}>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//               et eligendi repudiandae voluptatem tempore!
//             </div>
//             <div className={styles.modalFooter}>
//               <button
//                 className={`${styles.button} ${styles.outline}`}
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//               <button className={styles.button} onClick={closeModal}>
//                 Accept
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Modals;
