import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='w-50'>
            <h2 className='text-center mb-4'>Terms and Conditions Agreement:</h2>
            <p>
                1. Acceptance of Terms:
                By accessing or using the Platform, the User agrees to comply with and be bound by these terms and conditions. If the User disagrees with any part of the terms, they may not access the Platform. <br /> <br />

                2. Use of the Platform:
                The User agrees to use the Platform only for lawful purposes and in a manner consistent with all applicable laws and regulations.  <br /> <br />

                3. Privacy Policy:
                The User acknowledges and agrees to the terms of the Company's Privacy Policy, which is incorporated by reference into this Agreement.  <br /> <br />

                4. User Accounts:
                If the Platform requires the creation of an account, the User agrees to provide accurate and complete information. The User is responsible for maintaining the confidentiality of their account and password.  <br /> <br />

                5. Acceptance of Risks:
                The User acknowledges and accepts any risks associated with the use of the Platform. The Company shall not be liable for any damages resulting from the use of the Platform.  <br /> <br />

                6. Modifications:
                The Company reserves the right to modify or revise these terms and conditions at any time. Continued use of the Platform after such changes constitutes acceptance of the revised terms.  <br /> <br />

                7. Termination:
                The Company reserves the right to terminate or suspend access to the Platform at its discretion, without prior notice or liability, for any reason, including but not limited to a breach of these terms.  <br /> <br />

                8. Governing Law:
                This Agreement is governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising out of or in connection with this Agreement shall be resolved through arbitration in accordance with the rules of the [Arbitration Organization].  <br /> <br />

                9. Acceptance:
                By clicking the "I Accept" button or accessing the Platform, the User acknowledges that they have read, understood, and agree to be bound by the terms and conditions of this Agreement.
            </p>
            <div className='text-center mb-4'>
                <Link to="/register">
                    <Button>Go Back</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Terms;