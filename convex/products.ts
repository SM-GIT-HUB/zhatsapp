import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const getProducts = query({
    args: {},
    handler: async(ctx) => {
        const prods = await ctx.db.query("products").collect();
        return prods;
    }
})

export const addProduct = mutation({
    args: {
        name: v.string(),
        price: v.number()
    },
    handler: async(ctx, args) => {
        const pId = await ctx.db.insert("products", args);
        return pId;
    }
})

export const deleteProduct = mutation({
    args: {
        id: v.id("products")
    },
    handler: async(ctx, args) => {
        await ctx.db.delete(args.id);
    }
})