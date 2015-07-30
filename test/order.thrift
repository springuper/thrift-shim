# 订单摘要
struct OrderDigest {
    1: required i64         id,         # 订单 id
    2: required string      title,      # '7月13日-17日 早餐'
    3: optional i32         status,     # 未付款/已付款...
    4: optional double      price,      # 价格
    5: optional i32         time,       # 下单时间
}

service RpcZaocanOrderService {
    # 根据用户 token 获取订单列表，可以指定区段
    list<OrderDigest> getOrderListByToken(1: string token, 2: i32 offset, 3: i32 count)

    # 根据用户 token 获取订单数量，用户前端计算页码
    i32 getOrderCountByToken(1: string token)
}
