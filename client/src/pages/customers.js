import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
// redux
import { adminUpdatesUser, closeEditScreen, getUserDetailsById, getUsersList, openEditScreen } from '../redux/actions/userActions'
import { deleteUser } from '../redux/actions/userActions'
import { popupMessage } from '../redux/actions/statusActions'
// components
import AdminLayout from '../compononets/layout/adminLayout'
import { EditScreen, FixedScreen } from '../screens'
// hooks
import useKeypress from '../hooks/useKeypress'
// icons
import { TrashIcon, EditIconSquare, CrossLine } from '../helpers/avatar'
import AdminSrc from "../assests/avatar.jpg"
// styled-components
import { Wrapper, AdminList, CustomerList, UserInformations, InputWrapper, AdminFunc } from "./styles/customersStyles"

export default function Customers() {
    const { loading, error, users } = useSelector(state => state.usersReducer);
    const { success: destorySuccessful } = useSelector(state => state.deletedUser);
    const { modal, success: updateSuccessful } = useSelector(state => state.userUpdate);
    const { loading: detailsLoading, user } = useSelector(state => state.userDetails);
    const dispatch = useDispatch();

    const esc = useKeypress("Escape");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    // edit user details
    const handleEdit = (id) => {
        dispatch(getUserDetailsById(id));
        dispatch(openEditScreen());
    };

    // handle user details update
    const handleSubmit = (id) => {
        dispatch(adminUpdatesUser({
            id,
            name,
            email,
            isAdmin
        }));
    };

    // handle user delete
    const handleDelete = (id) => {
        if (window.confirm('Sure, you want to delete this contact?')) {
            dispatch(deleteUser(id));
        }
    };

    // convert general user into admin user
    const changeAdminToUser = (id) => {
        dispatch(adminUpdatesUser({
            id,
            isAdmin
        }));
    };

    useEffect(() => {
        dispatch(getUsersList());
    }, [dispatch]);

    useEffect(() => {
        if (esc) {
            dispatch(closeEditScreen());
        }
    }, [esc, dispatch])

    useEffect(() => {
        if (destorySuccessful) {
            dispatch(popupMessage('The user is destroyed boss🦸‍♂️'));
        } else if (updateSuccessful) {
            dispatch(popupMessage('Update successful BOSS🐱‍🏍'));
        }

        if (destorySuccessful || updateSuccessful) {
            const timer = setTimeout(() => {
                window.location.reload();
            }, 3000);
            return () => clearTimeout(timer);
        }

    }, [dispatch, destorySuccessful, updateSuccessful]);

    useEffect(() => {
        if (modal) {
            if (!detailsLoading && user) {
                setName(user.name);
                setEmail(user.email);
                setIsAdmin(user.isAdmin);
            }
        }
    }, [user, modal, detailsLoading]);

    if (loading) return <FixedScreen text="Loading" />
    if (error) return <FixedScreen text={error} />

    return (
        <AdminLayout>
            <Wrapper>
                <AdminList>
                    {users && users.filter(user => user.isAdmin).map((user, index) => (
                        <div className="admin" key={`admin-${index}`}>
                            <span className="admin_delete" onClick={() => changeAdminToUser(user._id)}>
                                <CrossLine />
                            </span>
                            <div className="admin_img">
                                <img src={AdminSrc} alt="iconfinder" />
                            </div>
                            <h3>{user.name}</h3>
                            <h4>{user.email}</h4>
                            <span>ADMIN</span>
                        </div>
                    ))}
                </AdminList>
                <CustomerList>
                    <h3>Customers of FIREYSHOP🔥</h3>
                    <table>
                        <thead>
                            <tr className="head">
                                <th className="customer_id"><h3>Customer ID</h3></th>
                                <th><h3>Name</h3></th>
                                <th><h3>Email</h3></th>
                                <th className="created_at"><h3>Created At</h3></th>
                                <th><h3>Edit/Delete</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.filter(user => !user.isAdmin).map((user, index) => (
                                <tr key={`customers-${index}`}>
                                    <td className="customer_id">{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="created_at">{user.createdAt.substring(0, 10)}</td>
                                    <td className="func">
                                        <span onClick={() => handleEdit(user._id)}><EditIconSquare /></span>
                                        <span onClick={() => handleDelete(user._id)}><TrashIcon /></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {modal ? (
                        <EditScreen height="auto">
                            {detailsLoading ? <h3>Wait...</h3> : (
                                <UserInformations>
                                    <span onClick={() => dispatch(closeEditScreen())}>
                                        <CrossLine />
                                    </span>
                                    <h3>User Informations</h3>
                                    <InputWrapper>
                                        <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                                        <label>name</label>
                                    </InputWrapper>
                                    <InputWrapper>
                                        <input type="text" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label>email</label>
                                    </InputWrapper>
                                    <AdminFunc>
                                        <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
                                        <label>{user && user.isAdmin ? `This is an admin type account` : `Make this an admin type account`}</label>
                                    </AdminFunc>
                                    <button onClick={() => handleSubmit(user._id)}>save changes</button>
                                </UserInformations>
                            )}
                        </EditScreen>
                    ) : <div />}
                </CustomerList>
            </Wrapper>
        </AdminLayout>
    )
}
