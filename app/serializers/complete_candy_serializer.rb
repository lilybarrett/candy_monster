class CompleteCandySerializer < ActiveModel::Serializer
  root :candy
  attributes :name, :description, :url, :points, :id

  def url
    object.image_url
  end
end
