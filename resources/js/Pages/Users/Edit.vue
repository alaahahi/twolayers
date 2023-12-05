<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Dropdown from '@/Components/Dropdown.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';


const props = defineProps({
    user: Array,
    url:String,
    usersType: Array,
    coordinators :Array,
    chiefs:Array,
});

const form = useForm({
    name: props.user.name,
    email: props.user.email,
    password: props.user.password,
    userType:props.user.userType,
    parent_id:props.user.parent_id,
});

const submit = () => {
    form.put(route('users.update', props.user.id));
};

</script>

<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit User
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">

                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-gray-500 rounded-md focus:outline-none"
                                :href="route('users.index')"
                            >
                                Back
                            </Link>
                        </div>

                        <form name="createForm" @submit.prevent="submit">
                                <div className="flex flex-col">
                                    <div className="mb-4">

                                    <InputLabel for="name" value="Name" />

                                    <TextInput 
                                        id="name" 
                                        type="text" 
                                        class="mt-1 block w-full" 
                                        v-model="form.name" 
                                        autofocus />

                                    <span className="text-red-600" v-if="form.errors.name">
                                        {{ form.errors.name }}
                                    </span>
                                    </div>
                                    <div className="mb-4">

                                        <InputLabel for="email" value="User name" />
                                        
                                        <TextInput 
                                            id="email" 
                                            type="text" 
                                            class="mt-1 block w-full" 
                                            v-model="form.email" 
                                            autofocus />

                                        <span className="text-red-600" v-if="form.errors.email">
                                            Sorry,Username is not available
                                        </span>
                                    </div>
                                    <div className="mb-4">

                                    <InputLabel for="password" value="Password" />
                                    
                                    <TextInput 
                                        id="password" 
                                        type="text" 
                                        class="mt-1 block w-full" 
                                        v-model="form.password" 
                                        autofocus />

                                    <span className="text-red-600" v-if="form.errors.password">
                                        {{ form.errors.password }}
                                    </span>
                                    </div>

                                    

                                    <div className="mb-4" v-if="!user.parent_id && user.type_id == 2">
                                    <InputLabel for="getCoordinator" value="User Coordinator" />
                                    <select  v-model="form.parent_id"  id="userType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected disabled>Choose a Coordinator</option>
                                    <option v-for="coordinator in coordinators" :value=coordinator.id>{{coordinator.name}}</option>
                                    </select>
                                    </div>

                                    <div className="mb-4" v-if="!user.parent_id && user.type_id == 1">
                                    <InputLabel for="getCoordinator" value="User Chief" />
                                    <select  v-model="form.parent_id"  id="userType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected disabled>Choose a Chief</option>
                                    <option v-for="chief in chiefs" :value=chief.id>{{chief.name}}</option>
                                    </select>
                                    </div>

                                </div>
  
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-rose-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>