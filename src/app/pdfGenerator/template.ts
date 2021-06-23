export class Invoice
{
    type = {
        income:'income',
        cost: 'cost',
    };
    status = {
        cart : 'cart',
    
        paid : 'paid',
        processing : 'processing',
        shipped : 'shipped',
        delivered : 'delivered',
    
        success : 'success',
        cancel : 'cancel',
        paymentFailure : 'paymentFailure',
    
    };

    id: string;
    name: string = "";
    buyerRemark: string;
    staffRemark: string;

    productRecords: {
        name: string;con: string;
         i
    
        skuTypes: string[];
    
        costByType: {
            unit: 'unit',
            weight: 'weight',
            length: 'length',
        };
    
        cost: number;
        quantity: number;
        markedPrice: number;
        sellingPrice: number;
        totalPrice: number;
    
        grossMargin: number; // grossMargin = sellingPrice - cost
    
        remark: string;
    }[] = [
    ];
    productCount: number; 

    stripePaymentIntentRaw: string[];
    stripePaymentIntentId: string;

    subTotal: number; // sum of products sellingPrice
    shippingCost: number; // minus shipping cost
    discountCost: number; // minus discount cost
    totalCost: number; // totalCost = subTotal - shippingCost - discountCost

    discountName: string;

    productTotalCost: number; // pay to us
    commission: number; // pay to us
    refereeCommission: number; // pay to referee
    grossMargin: number; // grossMargin = totalCost - commission - refereeCommission - totalProductCost

    // delivery information
    title: string = 'Mr';
    firstName: string;
    lastName: string;
    contact: number; // totalCost = subTotal - shippingCost - discountCost
    email: string;

    country: string;
    state: string;
    city: string;
    area: string;
    address: string;
    zip: string;


    // billing information
    titleFB: string;
    firstNameFB: string;
    lastNameFB: string;
    contactFB: number; // totalCost = subTotal - shippingCost - discountCost
    emailFB: string;

    countryFB: string;
    stateFB: string;
    cityFB: string;
    areaFB: string;
    addressFB: string;
    zipFB: string;

    paymentName: string;
    paymentTrackingId: string;
    paymentImageProof: string;

    shippingName: string;
    shippingTrackingId: string;
    shippingLink: string;

    discount: [
        type: {
            factor: 'factor',
            plusMinus: 'plusMinus'
        },
        value: number,
        promoteCode: string,
    
        name: string,
        description: string,
    
    
        isForAllReferee: boolean,
        isForListedReferees: boolean,
        isForMember: boolean,
        isAvaliable: boolean,
        isPublished: boolean,
    ];
    paymentDate: Date;
    accessCode: string;
}