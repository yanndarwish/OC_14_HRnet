import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
	reducerPath: "employeesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "  http://localhost:3000/" }),
    tagTypes: ["Employees"],
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => 'employees',
            provideTags: ["Employees"]
        }),
        postEmployee: builder.mutation({
            query: (payload) => ({
                url: "employees",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Employees"]
        })
    })
})

export const { useGetEmployeesQuery, usePostEmployeeMutation } = api

export default api