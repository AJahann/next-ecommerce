import type {
  AwaitedReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';

/* eslint-disable jsx-a11y/label-has-associated-control */
import UpdateButton from '@/components/UpdateButton';
import Link from 'next/link';

interface Props {
  _id: string;
  priceSummary: {
    subtotal: {
      amount:
        | bigint
        | boolean
        | number
        | string
        | Iterable<ReactNode>
        | Promise<AwaitedReactNode>
        | ReactElement
        | ReactPortal
        | null
        | undefined;
    };
  };
  _createdDate: any;
  status:
    | bigint
    | boolean
    | number
    | string
    | Iterable<ReactNode>
    | Promise<AwaitedReactNode>
    | ReactElement
    | ReactPortal
    | null
    | undefined;
}

const orders: Props[] = [
  {
    _id: '1234567890abcdef1234',
    priceSummary: {
      subtotal: {
        amount: 150.75,
      },
    },
    _createdDate: '2024-10-10T10:30:00Z',
    status: 'Processing',
  },
  {
    _id: 'abcdef1234567890abcd',
    priceSummary: {
      subtotal: {
        amount: 320.0,
      },
    },
    _createdDate: '2024-11-01T15:45:00Z',
    status: 'Shipped',
  },
  {
    _id: '9876543210fedcba9876',
    priceSummary: {
      subtotal: {
        amount: 85.5,
      },
    },
    _createdDate: '2024-11-05T09:15:00Z',
    status: 'Delivered',
  },
  {
    _id: 'fedcba9876543210fedc',
    priceSummary: {
      subtotal: {
        amount: 230.99,
      },
    },
    _createdDate: '2024-11-03T13:20:00Z',
    status: 'Pending',
  },
];
const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center gap-24 px-4 md:h-[calc(100vh-180px)] md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Profile</h1>
        <Form />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Orders</h1>
        <div className="mt-12 flex flex-col">
          {orders.map((order) => (
            <Link
              className="flex justify-between rounded-md px-2 py-6 even:bg-slate-100 hover:bg-green-50"
              href={`/orders/${order._id}`}
              key={order._id}
            >
              <span className="w-1/4">{order._id.substring(0, 10)}...</span>
              <span className="w-1/4">
                ${order.priceSummary.subtotal.amount}
              </span>
              {order._createdDate && (
                <span className="w-1/4">{order._createdDate}</span>
              )}
              <span className="w-1/4">{order.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

function Form() {
  return (
    <form className="mt-12 flex flex-col gap-4">
      <input hidden name="id" type="text" />
      <label className="text-sm text-gray-700">Username</label>
      <input
        className="max-w-96 rounded-md p-2 ring-1 ring-gray-300"
        name="username"
        type="text"
      />
      <label className="text-sm text-gray-700">First Name</label>
      <input
        className="max-w-96 rounded-md p-2 ring-1 ring-gray-300"
        name="firstName"
        type="text"
      />
      <label className="text-sm text-gray-700">Surname</label>
      <input
        className="max-w-96 rounded-md p-2 ring-1 ring-gray-300"
        name="lastName"
        type="text"
      />
      <label className="text-sm text-gray-700">Phone</label>
      <input
        className="max-w-96 rounded-md p-2 ring-1 ring-gray-300"
        name="phone"
        type="text"
      />
      <label className="text-sm text-gray-700">E-mail</label>
      <input
        className="max-w-96 rounded-md p-2 ring-1 ring-gray-300"
        name="email"
        type="email"
      />
      <UpdateButton />
    </form>
  );
}

export default ProfilePage;
