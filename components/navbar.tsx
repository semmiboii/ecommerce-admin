import React from 'react';
import PropTypes from 'prop-types';
import {auth, UserButton} from "@clerk/nextjs";
import MainNav from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";
const Navbar = async() => {

    const {userId} = auth()

    const stores = await prismadb.store.findMany({
        where:{
            userId
        }
    })

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores}/>
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;