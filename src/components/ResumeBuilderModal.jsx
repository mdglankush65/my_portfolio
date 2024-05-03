import React from 'react'
import resumepic from '../images/resumepic2.jpeg';

const ResumeBuilderModal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header ">
                        <h1 className="modal-title fs-5 ms-auto" id="exampleModalLabel">Resume Builder</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="m-auto py-1">
                        <img src={resumepic} width={'100%'} height={'100%'} alt=''></img>
                    </div>
                    <div className="modal-footer">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <h1 className='text-center'>Resume Builder App</h1>
                            <h2>Project Description:</h2>
                            <p>Resume Builder React is an advanced application aimed at simplifying the creation of professional resumes. Employing React, Next.js, and Node.js, this platform offers users a selection of resume templates and facilitates the input of personal details, education, experience, and key skills through intuitive forms. Once the user completes the form, they can preview their resume template with the entered data, providing options to edit or download the resume as a PDF.</p>
                            <p>The application tackles the challenge of providing a seamless user experience while generating resumes, ensuring efficiency in form input, template rendering, and PDF generation.</p>
                            <h2>The application will have the following features:</h2>
                            <ul>
                                <li>Template Selection: Users can choose from a variety of professionally designed resume templates.</li>
                                <li>Form Input: Intuitive forms guide users to input personal details, education history, work experience, and key skills.</li>
                                <li>Preview Functionality: Users can preview their resume in the selected template with the entered information.</li>
                                <li>Edit Option: Ability for users to make changes to the entered data directly within the preview.</li>
                                <li>PDF Download: Users can download the completed resume as a PDF for offline use or sharing.</li>
                            </ul>
                            <h2>Technologies Used:</h2>
                            <ul>
                                <li>React: For building a dynamic and interactive user interface.</li>
                                <li>Node.js: Enables server-side logic and API integrations.</li>
                                <li>Tailwind CSS: Provides utility classes for rapid and responsive UI development.</li>
                                <li>Express.js for creating the RESTful API</li>
                                <li>PDF Generation Library: Used for creating downloadable resumes in PDF format.</li>
                            </ul>
                            <h2>Project Requirements:</h2>
                            <ul>
                                <li>Efficient Resume Generation: Ensuring fast rendering of resume templates with user-entered data.</li>
                                <li>Secure User Authentication: Robust authentication mechanisms to protect user data and accounts.</li>
                                <li>Intuitive Form Input: User-friendly forms for seamless data input.</li>
                                <li>Responsive Design: Optimal user experience across various devices for accessibility and usability.</li>
                                <li>The application must adhere to good coding practices and follow the MVC architecture pattern.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeBuilderModal